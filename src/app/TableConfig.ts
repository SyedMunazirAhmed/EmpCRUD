export class TableConfig {
  columns!: {
    title: string;
    dataProperty: string;
    dataType: string;
    sortable: boolean;
    conditionToShow: boolean;
    exportable: boolean;
  }[]
}
