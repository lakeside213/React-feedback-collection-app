module.exports = survey => {
  return `<html>
      <body>
        <div style="text-align: center;">
          <h3>${survey.title}</h3>
          <p>Please answer the following question:</p>
          <p>${survey.message}</p>
          <div>
            <a href="#">Yes</a>
          </div>
          <div>
            <a href="#">No</a>
          </div>
        </div>
      </body>
    </html>;`;
};
