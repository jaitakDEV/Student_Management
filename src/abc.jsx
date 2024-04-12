<select
  className="w-full border rounded py-2 px-3"
  name="institutename"
  value={formik.values.institutename}
  onChange={formik.handleChange}
>
  <option value="">Select Institute!</option>
  {storedformdata.map((item, index) => (
    <option key={index} value={item.institutename}>
      {item.institutename}
    </option>
  ))}
</select>;
