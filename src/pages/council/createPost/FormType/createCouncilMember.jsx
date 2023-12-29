import * as yup from "yup";
import { useCreateForm } from "../component/useCreateForm";
import { validateFile } from "../component/validateFileSize";
import { useState } from "react";

export const CreateCouncilMember = ({ division }) => {
  const schema = {
    name: yup.string().required("You must enter your name"),
    position: yup.string().required("You must enter your position in Council"),
    phNumber: yup.number().required("You must enter your Phone Number"),
    insta: yup.string(),
    email: yup.string().email(),
    description: yup.string().required("You must give a description"),
    positionType: yup.string().required(),
    divisionType: yup.string().required(),
  };

  const [position, setPosition] = useState("Secretary");

  const {
    user,
    setDocumentUpload,
    onCreatePost,
    register,
    handleSubmit,
    errors,
    loading,
  } = useCreateForm(schema, division, position);

  return (
    <>
      {user ? (
        <form
          onSubmit={handleSubmit(onCreatePost)}
          className="councilCreateForm"
        >
          <input placeholder="Name" {...register("name")} type="text" />
          <p className="registerError">{errors.name?.message}</p>
          <input
            placeholder="Position (To display)"
            {...register("position")}
            type="text"
          />
          <p className="registerError">{errors.position?.message}</p>
          <select {...register("positionType")} onChange={(e)=>setPosition(e.target.value)}>
            <option>Secretary</option>
            <option>Coordinator</option>
            <option>StudentCouncil</option>
            <option>Office</option>
          </select>
          <select {...register("divisionType")} >
            <option>Cult</option>
            <option>Tech</option>
            <option>Sports</option>
            <option>Web</option>
            <option>Mess</option>
            <option>Maint</option>
            <option>NotApplicable</option>
          </select>
          <input
            placeholder="Phone Number"
            {...register("phNumber")}
            type="text"
          />
          <p className="registerError">{errors.phNumber?.message}</p>
          <input
            placeholder="Instagram (Optional)"
            {...register("insta")}
            type="text"
          />
          <p className="registerError">{errors.insta?.message}</p>
          <input
            placeholder="Eamil (Optional For Secies)"
            {...register("email")}
            type="text"
          />
          <p className="registerError">{errors.email?.message}</p>

          <label
            htmlFor="councilMemberPhotoUpload"
          >
            Upload an Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              if (validateFile(event, 300)) {
                setDocumentUpload((prev) => [...prev, event.target.files[0]]);
              }
            }}
            id="councilMemberPhotoUpload"
            required
          />
          <textarea placeholder="Description..." {...register("description")} />
          <p className="registerError">{errors.description?.message}</p>
          <input type="submit" value={loading ? "Uploading" : "Submit"} />
        </form>
      ) : (
        <div id="notLoggedIn">
          You must be logged in as a Council Member to use this facility
        </div>
      )}
    </>
  );
};
