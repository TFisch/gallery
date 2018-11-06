export const cleanData = paintings => {
  const records = paintings.records;
  const cleanRecords = records.reduce((cleanRecords, record) => {
    const newRecord = { id: record.objectid, image: record.images };
    cleanRecords.push(newRecord);

    return cleanRecords;
  }, []);
  return cleanRecords;
};
