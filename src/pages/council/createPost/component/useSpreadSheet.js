import * as XLSX from "xlsx";
import ReactDOMServer from "react-dom/server";

export const useSpreadSheet = (setDocumentUpload) => {

  function readExcelFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      try {
        reader.readAsBinaryString(file);
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(sheet);
          resolve(parsedData);
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  function convertToHTMLString(data) {
    let obj = {};
    Object.keys(data[0]).forEach((value, index) => {
      let div = (
        <div className="messMenuDayContainer" key={index}>
          {data.map((row, rowIndex) => {
            if (rowIndex === 0) {
              return <div className="messMenuDayName" key={rowIndex}>{value}</div>;
            }
            return (
              <div key={rowIndex}>
                {row["__EMPTY"] && <div className="messMenuMealSlot">{row["__EMPTY"]}</div>}
                {typeof row[value] === "string" &&
                  row[value].charAt(0) !== "*" && (
                    <div className="messMenuMeal" key={rowIndex}>{row[value]}</div>
                  )}
              </div>
            );
          })}
        </div>
      );
      div = ReactDOMServer.renderToString(div);
      obj[value] = div;
    });
    setDocumentUpload(obj);
    return obj;
  }

  const handleExcelFile = async (e) => {
    try {
      const result = await readExcelFile(e);
      await convertToHTMLString(result);
    } catch {
      window.alert("Some Error occurred while reading Excel File")
    }
  };

  // useEffect(() => {
  //   console.log(handledData);
  // }, [handledData]);

  return [handleExcelFile];
};
