export const cleanData = paintings => {
  const records = paintings.records;
  const cleanRecords = records.reduce((cleanRecords, record) => {
    const newRecord = { id: record.objectid, image: record.images };
    cleanRecords.push(newRecord);

    return cleanRecords;
  }, []);
  return cleanRecords;
};

export const cleanPaintingObject = painting => {
  let cleanPainting;

  if (!painting.records[0]) {
    cleanPainting = { error: 'Record not found' };
  } else {
    const paintingToClean = painting.records[0];
    cleanPainting = {
      century: paintingToClean.century,
      title: paintingToClean.title,
      period: paintingToClean.period,
      url: paintingToClean.url,
      dated: paintingToClean.dated
    };
  }
  return cleanPainting;
};
