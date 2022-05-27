function onEdit(history, endURL) {
  let tempURL = endURL 
  return function (data) {
      history.push({ pathname: tempURL, state: { ...data } })
  }
}


function onDelete(endURL , callback) {
  let tempUrl = endURL 

  return (data) => {
      let temp = {
          AuditUser: "temp",
          AuditApp: "Web Portal",
          ...data
      }
      console.log(data)
      fecthApi(tempUrl, "DELETE", temp).then(
          callback()
      ).catch(callback())
  }

}

const fecthApi = (endURL , method = "GET", data = {}) => {

  return fetch(endURL, {
      method: method,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          AuditUser: "temp",
          AuditApp: "Web Portal",
          Active: 1,
          ...data
      })
  }).then(res => res.json())
      .then(data => {
          if (data.error) {
              throw new Error(data.error)
          }
          return data
      })
}

export { onDelete, onEdit, fecthApi }