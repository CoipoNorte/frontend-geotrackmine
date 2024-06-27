import logo from '../assets/13998279154_3cd6083b40_o.jpg'
import * as ReactDOM from 'react-dom/client'
import React from 'react'

let stringHTML
const test = () => {
  const rowsAlarmaElement = ReactDOM.createRoot(document.querySelector('.rows'))
  stringHTML = '<>'
  for (let i = 0; i < 6; i++) {
    stringHTML += `
              <tr className="rowAlarma">
                <td>${i}</td><td>${i}</td><td>${i}</td><td>${i}</td>
              </tr>
    `
  }
  stringHTML += '</>'
  //rowsAlarmaElement.render({ __html: stringHTML })
}

const emptyList = () => {
  const rowsAlarmaElement = ReactDOM.createRoot(document.querySelector('.rows'))
  rowsAlarmaElement.render()
}

let rows = ({ data }) => {
  return <></>
}

export const AlarmaLista = () => {
  const [data, setData] = React.useState(6)
  return (
    <>
      <div className="bgList"></div>
      <div className="containerList">
        <div className="block">
          <div className="kpi">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
          <table className="tableAlarma">
            <thead className="headers">
              <tr className="rowHeader">
                <th className="header">adssad</th>
                <th className="header">asdasd</th>
                <th className="header">asdsad</th>
                <th className="header">asdasdsa</th>
              </tr>
            </thead>
            <tbody className="rows">
              {(() => {
                const arr = []
                for (let i = 0; i < data; i++) {
                  arr.push(
                    <tr key={"row"+i} className="rowAlarma">
                      <td key={"col1-" + i}>{i}</td>
                      <td key={"col2-" + i}>{i}</td>
                      <td key={"col3-" + i}>{i}</td>
                      <td key={"col4-" + i}>{i}</td>
                    </tr>
                  )
                }
                return arr
              })()}
            </tbody>
            <tfoot className="foot">
              <tr>
                <button type="button" onClick={() => setData(data + 1)}>asldasd</button>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  )
}
