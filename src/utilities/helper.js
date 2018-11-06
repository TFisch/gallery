export const cleanData = paintings => {
  const records = paintings.records;
  const cleanRecords = records.reduce((cleanRecords, record) => {
    const newRecord = { title: record.title, century: record.century, image: record.primaryimageurl, period: record.period, artist: record.people }
    cleanRecords.push(newRecord);
    return cleanRecords;
  }, []);
  return cleanRecords;
};
