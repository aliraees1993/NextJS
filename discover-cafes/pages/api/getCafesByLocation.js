import { fetchCafes } from "../../lib/cafes";

const getCafesByLocation = async (req, res) => {
    try {
        const { latLong, limit } = req.query;
        const response = await fetchCafes(latLong, limit);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
};

export default getCafesByLocation;
