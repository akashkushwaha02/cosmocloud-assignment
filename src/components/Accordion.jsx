import { useState, useEffect } from "react";

function Accordion({ handleInsertNode = () => {}, explorer }) {
  const [expand, setExpand] = useState(false);
  const [folderedit, setFolderedit] = useState(false);
  const [option, setOption] = useState(null);
  const [folderInput, setFolderInput] = useState(explorer?.name);
  const [folderName, setFolderName] = useState(folderInput);
  const [showInput, setShowInput] = useState({
    visible: false,
    type: "string",
  });

  const optionNames = ["Object", "string", "Boolean", "Number"];

  useEffect(() => {
    setFolderName(folderInput);
  }, [folderInput]);

  const handleNewFolder = (e, isObject) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isObject,
    });
  };

  const onAddFolder = (e, mouseClick) => {
    if ((e.keyCode === 13 && e.target.value) || mouseClick) {
      handleInsertNode(explorer.id, e.target.value, true, "string");

      setShowInput({ ...showInput, visible: false });
    }
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setFolderInput(() => event.target.value);
  };

  // function handleOptionType(event, index) {
  //   setOption(event?.target?.value || "object");
  //   console.log(event?.target?.value);
  // }

  // function optionDataFunc() {
  //   return (
  //     <select name="type" value={option} onChange={handleOptionType}>
  //       {optionNames.map((option, i) => {
  //         return (
  //           <option
  //             key={i}
  //             value={option}
  //             onSelect={() => handleOptionType(option, i)}
  //           >
  //             {option}
  //           </option>
  //         );
  //       })}
  //     </select>
  //   );
  // }

  const handleDelete = (e) => {
    console.log(e);
  };
  if (explorer.type === "object") {
    return (
      <div style={{ marginTop: 5 }}>
        <div onClick={() => setExpand(!expand)} className="folder">
          <span
            onClick={() => {
              setFolderedit(!folderedit);
            }}
          >
            {folderName}
          </span>
          {folderedit && (
            <input
              value={folderInput}
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => {
                setFolderName(e.target.value);
              }}
            />
          )}
          <select>
            <option>{explorer.type}</option>
          </select>
          {/* {optionDataFunc()} */}
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>+</button>
          </div>
          <div>
            <button onClick={(e) => handleDelete(e)}> Delete</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <input
                type="text"
                className="inputContainer__input"
                autoFocus
                onKeyDown={onAddFolder}
              />
              <select>
                <option>{explorer.type}</option>
              </select>
              <button onClick={onAddFolder(true)}>Add</button>
            </div>
          )}

          {explorer.items.map((exp) => {
            return (
              <Accordion
                handleInsertNode={handleInsertNode}
                key={exp.id}
                explorer={exp}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file">
        <span
          onClick={() => {
            setFolderedit(!folderedit);
          }}
        >
          {folderName}
        </span>
        {folderedit && (
          <input
            value={folderInput}
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => {
              setFolderName(e.target.value);
            }}
          />
        )}
        <select>
          <option>{explorer.type}</option>
        </select>
      </div>
    );
  }
}

export default Accordion;
