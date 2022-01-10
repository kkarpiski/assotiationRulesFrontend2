import {ResultsIndexesEnum} from "../../enums/results-indexes.enum";

export class IndexResultColorMapper {
  private readonly color: string;

  constructor(
    private readonly index: ResultsIndexesEnum
  ) {
    this.color = this.mapColor();
  }

  public get instance(): string {
    return this.color;
  }

  private mapColor(): string {
    const {index} = this;
    switch (index) {
      case ResultsIndexesEnum.BAD:
        return 'E61402'
      case ResultsIndexesEnum.GOOD:
        return '5FF702'
      case ResultsIndexesEnum.MODERATE:
        return 'FFEB05'
      case ResultsIndexesEnum.SUFFICIENT:
        return 'FF9401'
      case ResultsIndexesEnum.VERY_BAD:
        return 'A60D00'
      case ResultsIndexesEnum.VERY_GOOD:
        return '49C100'
      default:
        return 'C4C4C4';
    }
  }
}
