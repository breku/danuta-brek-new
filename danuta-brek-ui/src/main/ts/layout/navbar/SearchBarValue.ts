
export default class SearchBarValue {
    static NAME = "SearchBarValue";

    value: string = undefined;
    searchStrict: boolean = false;

    public clear() {
        this.value = undefined;
        this.searchStrict = false;
    }
}