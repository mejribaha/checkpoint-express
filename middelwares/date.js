exports.CheckDate = (req, res, next) => {
  const Dates = new Date();
  const day = Dates.getDay();
  const hours = Dates.getHours();
  if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
    next();
  } else {
    res.send("Hors Services");
  }
};
//module.exports = CheckDate;

