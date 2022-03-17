import { table, findRecordByFilter, getRecords } from "../../lib/airtable";

const favouriteCafeById = async (req, res) => {
    if (req.method === "PUT") {
        try {
            const { id } = req.body;

            if (id) {
                const records = await findRecordByFilter(id);

                if (records.length !== 0) {
                    const record = records[0];

                    const calculateVoting = parseInt(record.votes) + 1;

                    const updateRecord = await table.update([
                        {
                            id: record.recordId,
                            fields: {
                                votes: calculateVoting,
                            },
                        },
                    ]);

                    if (updateRecord) {
                        const minifiedRecords = getRecords(updateRecord);
                        res.json(minifiedRecords);
                    }
                } else {
                    res.json({ message: "Cafe id doesn't exist", id });
                }
            } else {
                res.status(400);
                res.json({ message: "Id is missing" });
            }
        } catch (error) {
            res.status(500);
            res.json({ message: "Error upvoting cafe", error });
        }
    }
};

export default favouriteCafeById;
