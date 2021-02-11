export function inputChangeHandler(event, callback) {
    callback(event.target.value);
}

export function deleteButtonHandler(event, array, setUpdated, storageField) {
    const id = event.target.id;
    const copy = [...array];
    const updated = copy.filter(item => item.id != +id);
    if (!storageField) {
        const updated = copy.filter(item => item.id != id);
        setUpdated(() => updated);
        return;
    }
    localStorage.setItem(`${storageField}`, JSON.stringify({ topics: updated }));
    setUpdated(() => updated);
}

export function toggleModalHandler(callback) {
    callback(prevState => !prevState);
}