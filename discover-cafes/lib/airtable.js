const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE
);

const table = base("cafes");

const getRecord = (record) => {
    return {
        recordId: record.id,
        ...record.fields,
    };
};

const getRecords = (records) => {
    return records.map((record) => getRecord(record));
};

const findRecordByFilter = async (id) => {
    const findCafeRecords = await table
        .select({
            filterByFormula: `id="${id}"`,
        })
        .firstPage();

    return getRecords(findCafeRecords);
};

export { table, getRecords, findRecordByFilter };
