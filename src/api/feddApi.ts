function feedApi() {
 return(

    const fetchTodos = async () => {
       
      };


    const { data: users, error } = await supabase
  .from('users')
  .select("*")
  // Filters
  .eq('column', 'Equal to')

      const { data} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchTodos,
      });


 )
    


}

export default feedApi