What is two Way Binding?

Two way Binding is basically the process in which we can update the values using frontend also and can be updated with the help of react also in backend and it shows the updated value in frontend.

1.  In input:text
        we will update the value by setUsername(e.target.value) and,

2.  In input:radio buttons
        in case of male : checked = {gender === 'male' ? true : false} onChange={(e) => setGender(e.target.value)}

        in case of female : checked = {gender === 'female' ? true : false} onChange={(e) => setGender(e.target.value)}

3.  In select options:
        we will give value attribute to the select tag and give it the value of city,

        and will give value attributes to options tag and give it same value as tag's data, to send the data to backend.

        now apply onChange attribute to the select tag as :
        onChange={(e) => setCity(e.target.value)}

4.  In textArea:
        simply apply onChange={(e) => setDesc(e.target.value)}
        And, to get its value from react to frontend, give value attribute to textArea tag as : value={desc}

5.  in checkbox:
        we can use it in two ways, if we want to use it as options we can give it value and get that value in backend, but here we are not using it as options so, we will just give it checked or not which will give us true or false.