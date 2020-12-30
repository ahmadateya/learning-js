import { SearchController } from '../controllers/searchController';
const { body, validationResult, query } = require('express-validator');

export class SearchRoutes {
    private searchController: SearchController = new SearchController();

    public routes(app: any): void {

        app.route('/search').post(
            //request body validation - should be in a separate file
            [body('keyword').exists().notEmpty()],
            (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(422).json({errors: errors.array()});
                }
                return this.searchController.searchForTrip(req, res)
            }
        );

        app.route('/search').get(
            //request body validation - should be in a separate file
            [query('search_id').exists().notEmpty().isUUID()],
            (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(422).json({errors: errors.array()});
                }
                return this.searchController.getSearchResults(req, res)
            }
        );

        // rxjs request
        app.route('/rx-search').post(
            [body('search').exists().notEmpty()],
            (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(422).json({errors: errors.array()});
                }
                return this.searchController.rxSearch(req, res)
            });
    }
}
