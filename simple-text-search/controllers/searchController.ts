import * as mongoose from 'mongoose';
import { TripModel } from '../models/tripModel';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import {ResultModel} from "../models/resultModel";
import {RxHR} from "@akanass/rx-http-request";

const Trip = mongoose.model('trips', TripModel);
const Result = mongoose.model('results', ResultModel);

export class SearchController {

    public async searchForTrip(req: Request, res: Response) {
        {
            try {
                const keyword =  req.body.keyword;
                const trips = await Trip.find({
                    $text: {
                        $search: keyword
                    }                
                });
                const search_uuid = uuidv4();
                //*************************************
                // enhancement: we can search first if this keyword is already existed before.
                // if so we return the search_id if the existed document
                // and if it doesnt exist before we proceed
                //*************************************
                const insertion = this.insertResults(search_uuid, keyword, trips);
                if (insertion){
                    res.json({
                        'status': 200,
                        'search_id': search_uuid
                    });
                }
            } catch (error) {
                console.log(error);
                res.sendStatus(500).json({
                    'error': {
                        'message': 'sorry, something went wrong'
                    }
                });
            }
        }
    }

    private async insertResults(search_id, keyword, results)
    {
        await Result.create({
            _id: search_id,
            keyword: keyword,
            search_results: results
        }).then((Result) => {
            return Result;
        }).catch( err => {
            console.log(`db error ${err.message}`);
        });
    }

    public getSearchResults(req: Request, res: Response)
    {
        try {
            const search_id =  req.query.search_id;
            Result.findOne({
                _id: search_id
            },(err, result: any) => {
                if (err) {
                    console.log(`db error ${err.message}`);
                }
                if (result.search_results == 0) {
                    return (
                        res.json({
                            'status': 200,
                            'message': 'sorry, we did not find a value with this keyword'
                        })
                    );
                }
                res.json({
                    'status': 200,
                    'data': result
                 });
            });
        } catch (error) {
            console.log(error);
            res.sendStatus(500).json({
                'error': {
                    'message': 'sorry, something went wrong'
                }
            });
        }
    }

    public rxSearch(req: Request, res: Response)
    {
        const postOptions = {
            body:{
                'keyword': req.body.search.toLowerCase()
            },
            json: true
        };

        const getOptions = {
            headers: {
                'User-Agent': 'Rx-Http-Request'
            },
            json: true
        }
        RxHR.post(`${process.env.app_url}/search`, postOptions).subscribe(
            (data) => {
                RxHR.get(`${process.env.app_url}/search?search_id=${data.body.search_id}`, getOptions)
                    .subscribe(
                        (data) => {
                            console.log('after', data.body)
                                res.json(data.body);
                        },
                    (err) => console.error(err)
                    )
            },
            (err) => console.error(err)
        )
    }
}
