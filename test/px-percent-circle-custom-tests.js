// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for a default px-percent-circle', function() {
    test('Check default value of px-percent-circle', function(done){
      var percentEl = Polymer.dom(document).querySelector('#px-percent-circle-1'),
          percentValue = percentEl.value,
          percentLabel = percentEl.children[0].children[2].children[0].innerHTML;
      assert.equal(percentValue, '0');
      assert.equal(percentLabel, '0');
      done();
    });
  });
  suite('Custom Automation Tests for instantiated px-percent-circle', function() {
    test('Check value of instantiated px-percent-circle', function(done){
      var percentEl = Polymer.dom(document).querySelector('#px-percent-circle-2'),
          percentValue = percentEl.value,
          percentLabel = percentEl.children[0].children[2].children[0].innerHTML;
      assert.equal(percentValue, '10');
      assert.equal(percentLabel, '20');  // 10 / 50 = 20%
      done();
    });
  });
};
