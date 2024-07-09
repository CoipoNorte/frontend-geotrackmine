/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faCircle, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/svg/tiny-Codelco_logo.svg'
import axios from 'axios'
import cat793iv from '../assets/Image/cat793iv.jpg'
import cat797f from '../assets/Image/cat797f.png'
import cat798ac from '../assets/Image/cat798ac.jpg'
import kom930e from '../assets/Image/kom930e.png'


const DialogAlerta = ({ setDialogUseState }, data) => {
  return (
    <div className="dialogPopup">
      <img srcSet={logo} className="material-symbols-outlined"></img>
      <div className="content">
        <label>Aqui va el texto :D</label>
        <p>Inserte más texto</p>
        <label>Aqui va el texto :D</label>
        <p>Inserte más texto</p>
        <label>Aqui va el texto :D</label>
        <p>Inserte más texto</p>
        <label>Aqui va el texto :D</label>
        <p>Inserte más texto</p>
        <button type="button" onClick={() => setDialogUseState(false)}>
          OK
        </button>
      </div>
    </div>
  )
}

const AlarmaGoogleMap = ({ setGoogleMapUseState }, data) => {
  return (
    <div className="mapModal">
      <img srcSet={logo} className="material-symbols-outlined"></img>
      <button type="button" onClick={() => setGoogleMapUseState(false)}>
        OK
      </button>
    </div>
  )
}

const flotas = [
  {
    flota: 'CAT 793F - ICV',
    src: cat793iv
  },
  {
    flota: 'CAT 797F',
    src: cat797f
  },
  {
    flota: 'CAT 797F_MAKEUP',
    src: cat797f
  },
  {
    flota: 'CAT 798AC',
    src: cat798ac
  },
  {
    flota: 'KOM 930E',
    src: kom930e
  }
]

const ModalLista = ({ setModalUseState, data }) => {
  const [tempData, setTempData] = React.useState("")
  return (
    <div className="modalPopup">
      <img srcSet={logo} className="material-symbols-outlined"></img>
      <div className="content">
        <div className="blockLine">
          <div>
            <label>Fecha</label>
            <label>{data.fecha}</label>
          </div>
          <div>
            <label>Estado</label>
            <label>{tempData ? tempData : data.estado}</label>
          </div>
          <div>
            <label>Localización</label>
            <label>{data.localizacion}</label>
          </div>
          <div>
            <label>Este</label>
            <label>{data.este}</label>
          </div>
          <div>
            <label>Norte</label>
            <label>{data.norte}</label>
          </div>
          <div>
            <label>Cota</label>
            <label>{data.cota}</label>
          </div>
          <div>
            <label>Razón</label>
            <label>{data.razon}</label>
          </div>
          <div>
            <label>Comentario</label>
            <label>{data.comment === '' ? 'No hay Comentario' : data.comment}</label>
          </div>
        </div>
      </div>
      <div className="containerModelo">
        <img src={flotas.filter((obj) => obj.flota === data.flota).at(0).src}></img>
        <div>
          <div>
            <label>Grupo</label>
            <label>{data.grupo}</label>
          </div>
          <div>
            <label>Flota</label>
            <label>{data.flota}</label>
          </div>
          <div>
            <label>Caex</label>
            <label>{data.caex}</label>
          </div>
        </div>
      </div>
      <button type="button" className="changeEstado" onClick={() =>setTempData("Resuelto")}>
        Resuelto
      </button>
      <button type="button" onClick={() => setModalUseState(false)}>
        OK
      </button>
    </div>
  )
}

export const AlarmaLista = () => {
  const LIMIT = 20
  const [isLoading, setLoading] = React.useState(true)
  const [index, setIndex] = React.useState(0)
  const [dataAlarma, setDataAlarma] = React.useState([])
  const [modalActivate, setActivateModal] = React.useState(false)
  const [dialogActivate, setDialogActivate] = React.useState(false)
  const [googleMapActivate, setGoogleMapActivate] = React.useState(false)
  const [dataToShow, setDataToShow] = React.useState({})
  const [totalData, setTotalData] = React.useState({})

  const changeIndex = (idx) => {
    const start = 20 * (idx - 1)
    const end = 20 * idx
    setDataAlarma(totalData.slice(start, end))
    return
  }
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3005/api/alerts/getAlerts')
      setTotalData([...response.data.data])
    } catch (error) {
      console.error('Error obteniendo datos:', error)
    }
  }
  const jsonToData = async () => {
    setIndex(parseInt(totalData.length / LIMIT) + 1)
    if (totalData.length < LIMIT) {
      setDataAlarma()
    } else {
      setDataAlarma(totalData.slice(0, 19))
    }
  }
  useEffect(() => {
    fetchData()
    jsonToData()
    setLoading(false)
  }, [totalData.length > 0])
  if (isLoading) console.log('loading!')
  return (
    <>
      <div className="bgList grayScale"></div>
      {modalActivate && <ModalLista setModalUseState={setActivateModal} data={dataToShow} />}
      {dialogActivate && <DialogAlerta setDialogUseState={setDialogActivate} />}
      {googleMapActivate && <AlarmaGoogleMap setGoogleMapUseState={setGoogleMapActivate} />}
      <div className={modalActivate ? 'containerList blur' : 'containerList'}>
        <div className="block">
          <div className="kpi">
            <div className="card">
              <p>Total de Alarmas</p>
              <strong>{totalData.length}</strong>
            </div>
            <div className="card">
              <p>Alarmas en Reserva</p>
              <strong>{dataAlarma.filter((alarma) => alarma.estado === 'Reserva').length}</strong>
            </div>
            <div className="card">
              <p>Alarmas en Demora</p>
              <strong>{dataAlarma.filter((alarma) => alarma.estado === 'Demora').length}</strong>
            </div>
          </div>
          <table className="tableAlarma">
            <thead className="headers">
              <tr className="rowHeader">
                <th className="header">Camión</th>
                <th className="header">Grupo</th>
                <th className="header">Localizacion</th>
                <th className="header">Estado</th>
                <th className="header">Razon</th>
                <th className="header">Periodo</th>
                <th className="header">Acción</th>
              </tr>
            </thead>
            <tbody className="rows">
              {(() => {
                const arr = []
                for (let data of dataAlarma) {
                  arr.push(
                    <tr className="rowAlarma" key={data.id}>
                      <td>{data.caex}</td>
                      <td>{data.grupo}</td>
                      <td>{data.localizacion}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={data.estado === 'Demora' ? faTriangleExclamation : faCircle}
                          color={data.estado === 'Demora' ? 'red' : 'orange'}
                        />
                      </td>
                      <td>{data.razon}</td>
                      <td>{data.fecha}</td>
                      <td>
                        <button className="buttonAction">
                          <FontAwesomeIcon
                            className="iconAction"
                            icon={faCircleInfo}
                            onClick={() => {
                              setDataToShow(data)
                              setActivateModal(true)
                            }}
                          />
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
                <td colSpan="7">
                  {(() => {
                    const array = []
                    for (let idx = 1; idx <= index; idx++) {
                      array.push(
                        <button
                          onClick={() => changeIndex(idx)}
                          className="indexes"
                          key={'idx_' + idx}
                        >
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
