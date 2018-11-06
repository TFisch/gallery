export const cleanData = paintings => {
  const records = paintings.records;
  const cleanRecords = records.reduce((cleanRecords, record, index) => {
    const newRecord = { id: index + "paint", title: record.title, century: record.century, image: record.images, period: record.period, artist: record.people };
    cleanRecords.push(newRecord);
    return cleanRecords;
  }, []);
  return cleanRecords;
};
