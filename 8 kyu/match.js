// DESCRIPTION:
// Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

// One of the simplest, yet most important factors is compensation.As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

//   Let's give this a try. We'll create a function match which takes a candidate and a job, which will return a boolean indicating whether the job is a valid match for the candidate.

// A candidate will have a minimum salary, so it will look like this:

// let candidate = {
//   minSalary: 120000
// }
// A job will have a maximum salary, so it will look like this:

// let job = {
//   maxSalary: 140000
// }
// If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

// For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary.However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate is a rockstar who enjoys programming on Codewars in their spare time.The company offering the job may be able to work something out.

// Давайте создадим систему поиска партнеров, которая поможет найти работу для разработчиков на основе ряда факторов.

// Одним из самых простых, но наиболее важных факторов является компенсация.Как разработчики, мы знаем, сколько денег нам нужно для поддержания нашего образа жизни, поэтому у нас обычно есть приблизительное представление о минимальной зарплате, которой мы были бы довольны.

// Давайте попробуем. Мы создадим функцию, match которая принимает candidate и job, которая будет возвращать логическое значение, указывающее, является ли задание действительным совпадением с кандидатом.

// У кандидата будет минимальная зарплата, поэтому она будет выглядеть так:

// let candidate = {
//   minSalary: 120000
// }
// У работы будет максимальная зарплата, поэтому она будет выглядеть так:

// let job = {
//   maxSalary: 140000
// }
// Если либо минимальная заработная плата кандидата, либо максимальная заработная плата для работы отсутствуют, выдается ошибка.

// Для действительного совпадения минимальная заработная плата кандидата должна быть меньше или равна максимальной заработной плате на работе.Однако давайте также включим 10 % пространства для маневра(вычитается из минимальной зарплаты кандидата) на случай, если кандидат — рок - звезда, которая любит программировать на Codewars в свободное время.Компания, предлагающая работу, может что - то придумать.


function match({ minSalary }, { maxSalary }) {
  if (!minSalary || !maxSalary) throw new Error('')
  return minSalary * 0.9 <= maxSalary;
}
    
function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) throw "Invalid Job or Candidate";
  return job.maxSalary >= candidate.minSalary * 0.9;
}
  