import MaterialTable from "material-table";
import { useHistory } from "react-router-dom";

const Materialtable = (props) => {
  const history = useHistory()
  let data = props.data;
  console.log("DAta is ", data)
  let arr = []
  data.map(e => {
    arr.push({ id: (e.id), name: (e.title), downloadcount: (e.download_count) })
  })
  const columns = [
    { title: 'Id', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Downloadcount', field: 'downloadcount' },
  ]
  return (
    <div>
      <MaterialTable title="List of books"
        data={arr}
        columns={columns}
        options={{
          // selection: true,
          paging: false
        }}
        actions={[
          {
            icon: 'account_circle',
            tooltip: 'Show Description',
            onClick: (event, rowData) => {
              history.push(`description/${rowData.id}`)
            }
          }
        ]}
      />

    </div>
  );
}
export default Materialtable;