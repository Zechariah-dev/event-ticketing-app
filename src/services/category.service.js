import Category from '../models/category'

class CategoryService {

    /***
     * @name getCategoryById
     * @type funcion
     * @param id {String}
     * @response cagegory {object}
     */

    static async getCategoryById(id) {
        const category = await Category.findById(id);

        if (category !== undefined) return category;
        return {}
    }


    /***
     * @name getCategoryByName
     * @type funcion
     * @param name {String}
     * @response cagegory {object}
     */

    static async getCategoryByName(name) {
        const category = await Category.findOne({name: name});

        if (category !== undefined) return category;
        return {}
    }

    /***
     * @name getAllCategory
     * @type funcion
     * @response cagegories {object}
     */

    static async getCategoryByName(name) {
        const categories = await Category.find();

        if (categories !== undefined) return categories;
        return {}
    }

    /***
     * @name deleteCategory
     * @type funcion
     * @param id {String}
     * @response cagegory {object}
     */

    static async deleteCategory(id) {
        const category = await Category.findByIdAndDelete(id);

        if (category !== undefined) return category;
        return {}
    }

}

export default CategoryService;