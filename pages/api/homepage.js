import movieData from '@/data/tableData/movieData'


export default function handler(req, res) {

  const filteredData = movieData.filter((item) => 
    item.poster_link !== null &&
    item.poster_link !== "None" &&
    item.release_date !== null &&
    item.release_date !== "None" &&
    item.trailer !== null &&
    item.trailer !== "None" &&
    item.starring !== null && item.trailer !== "None" &&
    item.starring.length > 0 
  );

  res.status(200).json(filteredData);
}
