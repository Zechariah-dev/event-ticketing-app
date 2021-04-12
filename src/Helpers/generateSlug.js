/**
 * @name generateSlug
 * @param {String} name
 * @return {string} slug
 */

 const generateSlug = (name) => {
    let slug;
    let formattedname = name.split(" ").join("-");
    let newdate = new Date();
    let formaatteddate = newdate.toDateString().split(" ").join("-");
    slug = formattedname + formaatteddate;
    return slug;
 };

 export default generateSlug;
 