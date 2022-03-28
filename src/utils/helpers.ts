// computes track duration
export const formatDuration = (duration: number) => {
    return `${Math.round((duration) / 60)}:${((duration) % 60).toString().length === 1
        ? '0' + ((duration) % 60)
        : (duration) % 60
        } mins`;
}

// generates a random number between 1 and 5
// this is just for the purposes of adding random ratings to tracks.
export const generateRating = (min = 1, max = 5) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
