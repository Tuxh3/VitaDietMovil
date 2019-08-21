const BuenFuncinamiento = require('./../src/app/pages/registrar/registrar.page.ts')
describe('Registrar Peso', () => {
  let registrarPeso;

beforeEach(()=>{
registrarPeso= new BuenFuncinamiento;
});

  it('loadPeso() should return a peso object', done => {
    registrarPeso.loadPeso().then(savePeso => {
      expect(savePeso).not.toBeUndefined(null);
      expect(savePeso.documento).toBeDefined();
      expect(savePeso.fecha).toBeDefined();
      expect(savePeso.peso).toBeDefined();
      done();
    });
  });

});