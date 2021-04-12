import Category from '../models';
import CategoryService from '../services';
import { 
    serverError, 
    serverResponse 
} from '../helpers';


class Categories {

    /***
     * @param {Object} req -> express request object
     * @param  {Object} res -> express response object
     * @returns {Json} 
     */

    static async create(req, res) {
        try {

            const { subtitle, description } = req.body;
            const name = req.body.name.toLowerCase();

            const existingCategory = await CategoryService.getCategoryByName(name);

            if (existingCategory) {
                return serverResponse(res, 409, {
                  error: `${name} category already exists`
                });
              }

            const newCategory = new Category({name, subtitle, description});

            return serverResponse(res, 200, {
                message: `${name} created successfully`,
                data: newCatergory
            });
        } catch(error) {
            serverError(res);
        }
    }

    /***
     * @param {Object} req -> express request object
     * @param  {Object} res -> express response object
     * @returns {Json} 
     */

     static async getCategory(req, res) {
         try {
            const { id } = req.query;

            const category = await CategoryService.getCategoryById(id);

            if (!category) {
                return serverResponse(res, 401, {
                    message: `${id} does not exist`
                });
            }

            return serverResponse(res, 201, {
                data: category
            });

         } catch (error) {
             serverError(res);
         }
     }

     /***
     * @param {Object} req -> express request object
     * @param  {Object} res -> express response object
     * @returns {Json} 
     */

     static async getAllCategories(req, res) {
         try {
             const categories = await CategoryService.getAllCategories();

             if (!categories) {
                 return serverResponse(res, 401, {
                     message: 'No category found'
                 });
             }

             return serverResponse(res, 200, {
                 data: categories
             });
         } catch (error) {
             serverError(res);
         }
     }

     /***
     * @param {Object} req -> express request object
     * @param  {Object} res -> express response object
     * @returns {Json} 
     */


     static async deleteCategory(req, res) {
         try {
            const { id } = req.query;

            const deletedCategory = await CategoryService.deleteCategory(id);

            if (!deletedCategory) {
                return serverResponse(res, 401, {
                    status: 'failure',
                    message: `${id} category not found`
                });
            }
         } catch (error) {
             serverError(res);
         }
     }

     /***
     * @param {Object} req -> express request object
     * @param  {Object} res -> express response object
     * @returns {Json} 
     */

     static async updateCategory(req, res) {
         try {
             const { subtitle, description } = req.body;
             const { id } = req.query;

             const name = req.body.name.toLowerCase();

            const categorydoc = await CategoryService.getCategoryById(id);

            if (!categorydoc) {
                return serverResponse(res, 401, {
                    message: `${id} category not found`
                });
            }

            let current = new Date();
            current = current.toISOString();

            categorydoc.name = name;
            categorydoc.subtitle = subtitle;
            categorydoc.description = description;
            categorydoc.updatedAt = current;

            await categorydoc.save();

            return serverResponse(res, 201, {
                message: `${name} updated succefully`,
                data: categorydoc
            });


         } catch (error) {
             serverError(res);
         }
    }

}


export default Categories;