import * as yup from "yup";
import { useCreateForm } from "../component/useCreateForm";
import { useSpreadSheet } from "../component/useSpreadSheet";

export const CreateMessMenu = ({ division }) => {
  const schema = {
    title: yup.string().required("You must add a title"),
  };

  const {
    user,
    setDocumentUpload,
    register,
    handleSubmit,
    errors,
    loading,
    onCreateMessMenu,
  } = useCreateForm(schema, division, "menu");

  const [handleExcelFile] = useSpreadSheet(setDocumentUpload);

  return (
    <>
      {user ? (
        <form
          onSubmit={handleSubmit(onCreateMessMenu)}
          className="councilCreateForm"
        >
          <input placeholder="Title..." {...register("title")} type="text" />
          <p className="registerError">{errors.title?.message}</p>
          <input
            type="file"
            accept=".xls, .xlsx"
            onChange={(event) => {
              handleExcelFile(event.target.files[0]);
            }}
          />
          <input type="submit" value={loading ? "Uploading" : "Submit"} />
        </form>
      ) : (
        <div id="notLoggedIn">
          You must be logged in as a Council Member to use this facility
        </div>
      )}
      <div id="meraDivMeriMarzi"></div>
    </>
  );
};
