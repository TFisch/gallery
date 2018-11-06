export const cleanData = paintings => {
  const records = paintings.records;
  const cleanRecords = records.reduce((cleanRecords, record) => {
    if (record.primaryimageurl) {
      const newRecord = {
        id: record.objectid,
        image: record.primaryimageurl,
        century: record.century,
        title: record.title,
        period: record.period,
        url: record.url
      };
      cleanRecords.push(newRecord);
    }
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
      image: paintingToClean.primaryimageurl,
      century: paintingToClean.century,
      title: paintingToClean.title,
      period: paintingToClean.period,
      url: paintingToClean.url
    };
  }
  return cleanPainting;
};
