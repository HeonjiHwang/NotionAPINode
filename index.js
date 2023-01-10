const express = require("express");
const getCalendarList = require("./services/notion");
const PORT = process.env.PORT || 5000;

const app = express();

/**
 * notion 캘린더 데이터 가져오기
 */
app.get("/calendars", async(req, res) => {
    const calendars = await getCalendarList();
    res.json(calendars);
});

app.listen(PORT, console.log(`server started on port ${PORT}`));