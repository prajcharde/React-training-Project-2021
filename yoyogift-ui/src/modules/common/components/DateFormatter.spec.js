import { DateFormatter } from './DateFormatter';
    
    describe('DateFormatter component', () => {
      it('should render snapshot', () => {
            let date = new Date('2021-09-26');
            let comp = DateFormatter(date)
            expect(comp).toBe('2021-09-26');
        })
    });