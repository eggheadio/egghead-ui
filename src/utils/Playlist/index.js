export const buildPlaylistMeta = (lessons, progress) => {
  const { completed_lessons, current_lesson } = progress
  const watchedVids = completed_lessons.map((l) => l.series_row_order)
  const currentVid = current_lesson.series_row_order

  return lessons.reduce((playlist, lesson) => {
    if (watchedVids.includes(lesson.series_row_order)) {
      playlist.push(Object.assign({watched: true}, lesson))
      return playlist
    }

   if (currentVid === lesson.series_row_order) {
      playlist.push(Object.assign({current: true}, lesson))
      return playlist
   }
    
    playlist.push(lesson)
    return playlist
  }, [])
}

export const findVidNumber = (playlist, current) => {
  for (let v of playlist) {
    if (current.series_row_order === v.series_row_order) {
      return playlist.indexOf(v)
    }
  }
}

export const getTimeLeft = (totalDuration, progress) => {
  const watchedTime = progress.completed_lessons.reduce((p, i) => {
    return p + i.duration
  }, 0)

  return totalDuration - watchedTime
}

