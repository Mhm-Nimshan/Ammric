function onEdit(history, url) {
  let tempURL = url;
  return function (data) {
    history.push({ pathname: tempURL, state: { ...data } });
  };
}

function onDelete(url, callback) {
  let tempUrl = url;

  return (data) => {
    let temp = {
      AuditUser: "temp",
      AuditApp: "Web Portal",
      ...data,
    };
    fecthApi(tempUrl, "DELETE", temp).then(callback()).catch(callback());
  };
}

const fecthApi = (url, method = "GET", data = {}) => {
  return fetch(url, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      AuditUser: "temp",
      AuditApp: "Web Portal",
      Active: 1,
      ...data,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    });
};

export { onDelete, onEdit, fecthApi };
