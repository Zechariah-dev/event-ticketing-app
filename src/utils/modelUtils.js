function generateSlug(model) {
    const { name, venue} = model;
    return name + venue
}