// Back end logic
// Counting game
var count_by;
var multiply_by;
var limit;
// Disemvowel
var active_quote;
var quote1a = "I'm for truth, no matter who tells it. I'm for justice, no matter who it's for or against.";
var quote2a = "Inside every cynical person, there is a disappointed idealist.";
var quote3a = "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.";
var quote4a = "One good thing about music, when it hits you, you feel no pain.";
var quote5a = "Will the real Slim Shady please stand up.";

var disemvowel = function(string){
  var all_letters = string.split('');
  for (var i = 0; i < all_letters.length; i++) {
    if(all_letters[i].toLowerCase() === 'a' || all_letters[i].toLowerCase() === 'e' || all_letters[i].toLowerCase() === 'i' || all_letters[i].toLowerCase() === 'o' || all_letters[i].toLowerCase() === 'u'){
      all_letters[i] = '-';
    }
    if(all_letters[i].toLowerCase() === 'y'){
      var tiebreaker = Math.random();
      if (tiebreaker > .5) {
        all_letters[i] = '-';
      }
    }
  }
  all_letters = all_letters.join('');
  return all_letters;
}
var random_number = Math.random();
// Prime Sifting
var is_prime = function(value) {
  for (var i = 2; i <= (value / 2); i++) {
    if ((value % i) === 0) {
      return false;
    }
  }
  return true;
}
// User Logic
$(document).ready(function() {
  // Logic for counting game
  $('#counting').submit(function(event) {
    count_by = $('#userCount').val();
    multiply_by = $('#userMultiply').val();
    count_by = parseInt(count_by);
    multiply_by = parseInt(multiply_by);
    for (var i = 0; i <= count_by; i += multiply_by) {
      if (i === 0) {
        $('#count_p').append('result = ');
      } else {
        $('#count_p').append(i + ', ');
      }
    }
    event.preventDefault();
  });
  // End of counting game
  // start of disemvowel
  $('#random').click(function(){
    $('.quotes').detach();
    if (random_number <= .2){
      $('#active_quote').append('<p class="quotes">' + (disemvowel(quote1a)) + '</p>');
      active_quote = quote1a;
    }else if(random_number > .2 && random_number <= .4){
      $('#active_quote').append('<p class="quotes">' + disemvowel(quote2a) + '</p>');
      active_quote = quote2a;
    }else if(random_number > .4 && random_number <= .6){
      $('#active_quote').append('<p class="quotes">' + disemvowel(quote3a) + '</p>');
      active_quote = quote3a;
    }else if(random_number > .6 && random_number <= .8){
      $('#active_quote').append('<p class="quotes">' + disemvowel(quote4a) + '</p>');
      active_quote = quote4a;
    }else{
      $('#active_quote').append('<p class="quotes">' + disemvowel(quote5a) + '</p>');
      active_quote = quote5a;
    }
  });
  $('#disemvowel').submit(function(event) {
    if (active_quote === $('#user_string').val()) {
      alert('correct!!!!');
    } else {
      alert('fail!');
      event.preventDefault();
    }
  });
  // end of disemvowel
  // Start of Facotrial
  $('#factorials').submit(function(event) {
    var zero_check = parseInt($('#userFactorial').val());
    $('.fact').detach();
    $('#fact_results').append('<p class=fact></p>');
    var count = parseInt($('#userFactorial').val());
    if (zero_check === 0) {
      $('.fact').append('0! = 1');
    } else if (zero_check < 0) {
      alert('Please enter a positive number!');
    } else {
      $('.fact').append(count + '! = ' + count);
      for (var i = (count - 1); i > 0; i--) {
        $('.fact').append(' * ' + i);
        count *= i;
      }
      $('.fact').append(' = ' + count);
    }
    event.preventDefault();
  });
  // end of factorial
  // start of Palindromes
  $('#palindromes').submit(function(event) {
    $('.pal').detach();
    var user_original = $('#user_palindrome').val();
    var reverse_pal = $('#user_palindrome').val().split('').reverse().join('');
    if(user_original === reverse_pal) {
      $('#palindromes_results').append("<p class='pal'>" + user_original + ' = ' + reverse_pal + '</p>');
    } else {
      $('#palindromes_results').append("<p class='pal'>" + user_original + ' != ' + reverse_pal + '</p>');
    }
    event.preventDefault();
  });
  // end of Palindromes
  // start prime numbers
  $('#optimus').submit(function(event) {
    $('.prime_results').detach();
    var primes = [];
    var user_num = parseInt($('#user_optimus').val());
    if (user_num > 3000) {
      alert('Use a smaller number...')
    } else {
      for (var i = 2; i <= user_num; i++) {
        if (is_prime(i)) {
          primes.push(i);
        }
      }
    }
    $('#optimus_results').append('<p class="prime_results">' + primes + '</p>');
    event.preventDefault();
  });
  // end prime numbers
});
