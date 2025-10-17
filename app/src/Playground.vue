<style>
main {
    text-align: center;
    padding: auto;
    margin: auto;
    width: 50%;
    border: 3px solid blue;
    padding: 10px;
}
#text-fields{
    margin: auto;
    padding: 5px auto;
    width: 50%;
   /*border: 3px solid blue;*/
}
h2{
    text-align: center;
}
row
{
    padding: 5px 0px;
}
</style>

<template>
  <main>
    <div id="login">
        <h2>Co-op Workout Login</h2>
        <div id="text-fields">
            <row style="display: inline-block;">
                <label>Username:</label>
                <input></input>
            </row>
            <row style="display: inline-block">
                <label>Password:</label>
                <input type="password"></input>
            </row>
        </div>
        <br></br>
        <row>
            <button>Sign Up</button>
            <button>Login</button>
        </row>
    </div>
    
  </main>
</template>
