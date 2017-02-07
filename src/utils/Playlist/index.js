export const buildPlaylistMeta = (lessons, progress) => {
  const { completed_lessons, current_lesson } = progress
  const watchedVids = completed_lessons.map((l) => l.series_row_order)
  const currentVid = current_lesson.series_row_order

  return lessons.reduce((playlist, lesson) => {
    if (watchedVids.includes(lesson.series_row_order)) {
      playlist.push(Object.assign({watched: true}, lesson))
    }

   if (currentVid === current_lesson.series_row_order) {
      playlist.push(Object.assign({current: true}, lesson))
     
   }
    
    return playlist
  }, [])
}
