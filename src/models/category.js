import mongoose from 'mongoose';

const { model, Schema } = mongoose;

const categorySchema = new Schema({
    name: { type: String, minlength: 2},
    subtitle: { type: String, minlength: 5},
    description: { type: String, maxlength: 200 },
    createdAt: { type: Date, default: new Date },
    updatedAt: { type: Date, default: new Date}
});

const categoryModel = model('category', categorySchema);

export default categoryModel;