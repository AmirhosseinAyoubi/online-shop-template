export const shortName = (name) => {
    const newName = name.split(" ")
    return `${newName[0] && newName[0]} ${newName[1] && newName[1]} ${newName[2] && newName[2]} ${newName[3] && newName[3]}`
}