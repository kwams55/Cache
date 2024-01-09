import axios from "axios";

export default function handler(req, res) {
  const { keyCode } = req.body;
  console.log("here");
  axios
    .get(`http://localhost:5004/rooms/${keyCode}`)
    .then((response) => response.json())
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(500).json({ message: "Internal Server Error", err })
    );
}
