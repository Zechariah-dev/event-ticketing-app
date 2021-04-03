/**
 * @name generateSlug
 * @param {String} name
 * @return {string} slug
 */

 const generateSlug = (name) => {
     let slug
    const formattedname = name.split(" ").join("-");
    const newdate = new Date;
    const formaatteddate = newdate.toDateString()
                                .split(" ")
                                .join("-");
    slug = formattedname + formaatteddate;
    return slug;
 };

 export default generateSlug;
 