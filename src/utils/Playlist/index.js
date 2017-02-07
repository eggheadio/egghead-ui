export const buildPlaylistMeta = (lessons, progress) => {
  console.log('build playlist meta lessons', lessons)
  console.log('build playlist meta progress', progress)
  const { completed_lessons, current_lesson } = progress
  const watchedVids = completed_lessons.map((l) => l.series_row_order)
  const currentVid = current_lesson.series_row_order

  console.log('completed_lessons: ', completed_lessons)
  console.log('current_lesson: ', current_lesson)


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
