exports.getMarksByStudent = async (req, res) => {
    try {
      const { studentId } = req.params;
      const marks = await Mark.find({ studentId });
      if (marks.length === 0) {
        return res.status(404).send('No marks found for this student');
      }
  
      // Calculate the mean of means for each mark document
      const meanOfMeans = marks.reduce((acc, curr) => {
        const sum = curr.ratings.reduce((sum, rating) => sum + rating, 0);
        const mean = sum / curr.ratings.length;
        return acc + mean;
      }, 0) / marks.length;
  
      res.json({ meanOfMeans });
    } catch (error) {
      res.status(400).send(error);
    }
  };
  