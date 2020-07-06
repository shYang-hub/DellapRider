export class bnkAccInfoData {

  constructor(readonly a: string,
              readonly name: string,
              readonly phone: string,
              readonly dept: string,
            ) {
  }

  static jenniferGreen(): bnkAccInfoData {
    return new bnkAccInfoData(
      'dellap111',
      '홍배달',
      '010-4545-7878',
      '수영지점',
    );
  }
}
