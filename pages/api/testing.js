import base64 from 'base-64'

export default async (req, res) => {
    try {
      const response = await fetch(
        `https://new.advanceexcel.in/admin/17000ft_apis/staff`,
        {
          body: "office",
          method: 'POST'
        }

        );

        const data = await JSON.stringify(response)


      if (response.status >= 400) {
        return res.status(400).json({
          error: 'There was an error'
        });
      }

      return res.status(200).json(data);
      
    } catch (error) {
      return res.status(500).json({
        error: 'There was an error'
      });
    }
  };