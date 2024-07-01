import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as dataTest from '../services/dataTest.json'
import { Alarma } from '../services/classes/alarma'
import { faTriangleExclamation, faCircle, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const ModalLista = ({ data }) => {
  return (
    <div className="modalPopup">
      <span className="material-symbols-outlined">done</span>
      <label>Aqui va el texto :D</label>
      <p>Inserte más texto</p>
      <button type="button">OK</button>
    </div>
  )
}

export const AlarmaLista = () => {
  const LIMIT = 20
  const [isLoading, setLoading] = React.useState(true)
  const [index, setIndex] = React.useState(0)
  const [dataAlarma, setDataAlarma] = React.useState([])
  const alarmas = []
  const changeIndex = (idx) => {
    return
  }
  const jsonToData = async () => {
    for (let x of dataTest.data) {
      alarmas.push(new Alarma(x.alertID, x.alertType, x.message, x.timestamp, x.dispatcherID))
    }
    console.log(parseInt(alarmas.length / 20) + 1)
    setIndex(parseInt(alarmas.length / LIMIT) + 1)
    if (alarmas.length < LIMIT) {
      setDataAlarma(alarmas)
    } else {
      setDataAlarma(alarmas.slice(0, 19))
    }
  }
  useEffect(() => {
    setTimeout(() => {
      jsonToData()
      setLoading(false)
    }, 10000)
  }, [])
  if (isLoading) console.log('loading!')
  return (
    <>
      <div className="bgList grayScale"></div>
      <div className="containerList">
        <div className="block">
          <div className="kpi">
            <div className="card">
              <p>Total de Alarmas</p>
              <strong>{dataAlarma.length}</strong>
            </div>
            <div className="card">
              <p>Total de Alarmas</p>
              <strong>{dataAlarma.length}</strong>
            </div>
            <div className="card">
              <p>Total de Alarmas</p>
              <strong>{dataAlarma.length}</strong>
            </div>
          </div>
          <table className="tableAlarma">
            <thead className="headers">
              <tr className="rowHeader">
                <th className="header">ID Alarma</th>
                <th className="header">Alerta</th>
                <th className="header">Periodo</th>
                <th className="header">Mensaje</th>
                <th className="header">Acción</th>
              </tr>
            </thead>
            <tbody className="rows">
              {(() => {
                const arr = []
                for (let data of dataAlarma) {
                  arr.push(
                    <tr className="rowAlarma">
                      <td>{data.alertId}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={
                            data.alertType === 'Test Alert 1' ? faTriangleExclamation : faCircle
                          }
                          color={data.alertType === 'Test Alert 1' ? 'red' : 'green'}
                        />
                      </td>
                      <td>{data.timestamp}</td>
                      <td>{data.dispatcherID}</td>
                      <td>
                        <button className="buttonAction">
                          <FontAwesomeIcon className="iconAction" icon={faCircleInfo} />
                        </button>
                      </td>
                    </tr>
                  )
                }
                return arr
              })()}
            </tbody>
            <tfoot className="foot">
              <tr>
                <td colSpan="5">
                  {(() => {
                    const array = []
                    for (let idx = 1; idx <= index; idx++) {
                      array.push(
                        <button className="indexes" key={'idx_' + idx}>
                          {idx}
                        </button>
                      )
                    }
                    return array
                  })()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  )
}
