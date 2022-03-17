import { table, getRecords, findRecordByFilter } from "../../lib/airtable";

const createCafe = async (req, res) => {
    if (req.method === "POST") {
        const { id, name, imgUrl, address, postcode, locality, votes } =
            req.body;

        try {
            if (id) {
                const records = await findRecordByFilter(id);

                if (records.length !== 0) {
                    res.json(records);
                } else {
                    if (name) {
                        const createRecords = await table.create([
                            {
                                fields: {
                                    id,
                                    name,
                                    imgUrl,
                                    address,
                                    postcode,
                                    locality,
                                    votes,
                                },
                            },
                        ]);

                        const records = getRecords(createRecords);
                        res.json(records);
                    } else {
                        res.status(400);
                        res.json({ message: "Id or name is missing" });
                    }
                }
            } else {
                res.status(400);
                res.json({ message: "Id is missing" });
            }
        } catch (err) {
            res.status(500);
            res.json({ message: "Error creating or finding a store", err });
        }
    }
};

export default createCafe;
